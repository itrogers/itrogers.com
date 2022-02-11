---
date: "2022-02-09 08:00:00-08:00"
template: post
slug: wrapping-socket-io-into-custom-react-hook
title: Wrapping Socket.Io Connections Into a Custom React Hook
category: Code
draft: false
tags:
  - React
  - Socket.io
description: "Create a custom hook to access a socket.io instance within any React component"
---

Over at [Kohost](https://kohost.io), we rely on the [socket.io](http://socket.io) library to enable real time communication for users to control their Spaces, wether it be a hotel room or their office.

In a recent refactoring and update of our front end user application, which utilizes Create React App, I found the need to reference the logged-in user’s socket.io connection within any React component. Thanks to a custom hook, which we will call `useSocketIo` - this is possible. I’ve simplified the code to be somewhat primitive for the purposes of this guide.

_Note: since the user has a single socket.io connection that needs access across the entire application, I’ve opted to use React context to make the hook accessible to components within the Application shell, without having to reconnect on each page. [Let me know](https://twitter.com/itrogers) if there might be a better or more optimal way to do this._

## Create the socket.io connection using a custom class

I chose to wrap the socket.io connection into a class that extends an `EventEmitter` so that I can somewhat easily create wrapper methods around the library. An example would be the `subscribe` method, where any component can subscribe to any event from the socket, without needing to know the specifics of the `socket.io-client` library syntax.

`socketIoClient.js`

```jsx
import io from "socket.io-client";
import { EventEmitter } from "events";

export default class SocketIoClient extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
    this.socket = null;
    this._connect();
  }

  get connected() {
    return this.socket && this.socket.connected;
  }

  _connect() {
    const options = {
      autoConnect: true,
      forceNew: false,
      auth: {
        token: this.config.token,
      },
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 3000,
      withCredentials: true,
    };
    this.socket = io(this.config.url, options);

    this.socket.on("connect", () => {
      this.emit("connect", this.socket);
    });

    this.socket.on("disconnect", (reason) => {
      this.emit("disconnect", reason);
    });

    this.socket.on("connect_error", (error) => {
      console.log(error);
    });
  }

  subscribe(event, callback) {
    this.socket.on(event, callback);
  }

  send(event, data) {
    this.socket.emit(event, data);
  }
}
```

In the `_connect` method, there isn’t much difference here compared to the socket.io documentation, it's pretty basic expect for a customized way to get the socket url into the library.

## Create the hook and return the socket instance

`use-socket-io.js`

```jsx
import React from "react";
import SocketIoClient from "./socketIoClient";


export function useSocketIo() {
  const config = {
    url: "https://yourApi.com/socket.io"
    token: "Your user's auth token to connection"
  };

  const client = new SocketIoClient(config);

  client.on("connect", () => {
    console.log("Socket.io client connected");
  });

  client.on("disconnect", () => {
    console.log('Socket.io client disconnected')
  });

  return client;
}
```

This is great, but the issue here is that every time we call `useSocketIo()`, the hook will initiate the socket connection. That’s definitely a waste of resources and will provide for a bad user experience.

I solved this by wrapping the majority of the application in a socket.io context, where the return value of the hook is the provider for all consumers of the context. In other words, this allows all components (no matter how deep), to use the socket context

## Wrap the hook in context

Here, we now export the Context provider, which uses the hook, instead of directly exporting the hook to avoid the instance being created each time. This essentially gives you a "global" usage of socket.io.

`use-socket-io.js`

```jsx
import React, { useContext, createContext, useRef } from "react";
import SocketIoClient from "./socketIoClient";

const socketIoContext = createContext();

export function ProvideSocketIoClient({ children }) {
  const client = useProvideSocketIoClient();
  return (
    <socketIoContext.Provider value={client}>
      {children}
    </socketIoContext.Provider>
  );
}

export const useSocketIoClient = () => {
  return useContext(socketIoContext);
};

function useProvideSocketIoClient() {
   const config = {
    url: "https://yourApi.com/socket.io"
    token: "Your user's auth token to connection"
  };

  const client = new SocketIoClient(config);

  client.on("connect", () => {
    console.log("Socket.io client connected");
  });

  client.on("disconnect", () => {
    console.log('Socket.io client disconnected')
  });

  return client;
}
```

Set the context provider high up in the application tree, ideally somewhere above your routes but below your authentication mechanism.

`App.js`

```jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProvideSocketIoClient } from "./hooks/use-socket-io-client";
import ErrorBoundary from "./components/ErrorBoundary";
import Routes from "./components/Routes";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <ErrorBoundary>
      <ProvideSocketIoClient>
        <Router>
          <Routes />
        </Router>
      </ProvideSocketIoClient>
    </ErrorBoundary>
  );
}

export default App;
```

## Access the socket instance in a component

Here you can see a simple example of how we use the hook in an arbitrary component. This will emit a socket message on each button click, as well as display any incoming messages below the button. Make sure to call the `unsubscribe` method when the component unmounts so that you don't have dangling event listerns in your app.

`./components/SimpleExample.jsx`

```jsx
import React, { useEffect, useState } from "react";
import { useSocketIoClient } from "../hooks/use-socket-io-client";

const SimpleExample = () => {
  const [msgReceived, setMsgReceived] = useState("");
  const client = useSocketIoClient();

  const handleClick = () => {
    client.send("message", "Button was clicked!");
  };

  const handleIncomingMessage = (message) => {
    setMsgReceived(message);
  };

  useEffect(() => {
    client.subscribe("some event", handleIncomingMessage);

    return () => client.unsubscribe("some event", handleIncomingMessage);
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      {msgReceived && <span className="text-large">{msgReceived}</span>}
    </>
  );
};

export default SimpleExample;
```
