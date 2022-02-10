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

*Note: since the user has a single socket.io connection that needs access across the entire application, I’ve opted to use React context to make the hook accessible to components within the Application shell, without having to reconnect on each page. [Let me know](https://twitter.com/itrogers) if there might be a better or more optimal way to do this.* 

## Create the socket.io connection

```jsx
import React from "react";
```

There isn’t much difference here compared to the socket.io documentation….pretty basic.

## Create the hook and return the socket instance

```jsx
const example;
```

This is great, but the issue here is that every time we call `useSocketIo()`, the hook will initiate the socket connection. That’s definitely a waste of resources and will provide for a bad user experience.

I solved this by wrapping the majority of the application in a socket.io context, where the return value of the hook is the provider for all consumers of the context. In other words, this allows all components (no matter how deep), to use the socket context 

## Wrap the hook in context

```jsx
const example;
```

Set the context provider high up in the application tree, ideally somewhere above your app she’ll but below your authentication mechanism.

```jsx
Provider / Consumer
```

## Access the socket instance in a component

Here you can see a simple example of how we use the hook in an arbitrary component. This will emit a socket message on each button click.

```jsx

```