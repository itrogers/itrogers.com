---
date: "2016-08-29 17:24:53+00:00"
template: post
slug: remove-sharedaddy-sharing-post-excerpt-wordpress
title: Remove Sharedaddy Sharing from the Post Excerpt in WordPress
category: Code
---

At [Mvestor Media](https://www.mvestormedia.com), we regularly make tweaks and updates to sites that we have built or taken over. We were working on a blog slider for a client recently, where we were taking advantage of `the_excerpt()` to display a snippet of the blog article. They had [Jetpack's Sharedaddy](https://jetpack.com/tag/sharedaddy/) sharing feature enabled, which by default, was displaying the sharing icons below the post excerpt, which can be useful in some situations, but not ours.

I did some Google searching, and found some solutions to comment out the filter in `sharing.php` or `sharing-service.php` - which isn't really an ideal or standardized solution. Instead, I wrote a helper function to place in `functions.php`.

```php
    /* Remove Jetpack Sharedaddy Sharing from post excerpts */

    add_action( 'init', 'remove_sharedaddy_excerpt_sharing', 20 );

    function remove_sharedaddy_excerpt_sharing() {
       remove_filter( 'the_excerpt', 'sharing_display', 19 );
    }
```

I plan to add more code snippets and solutions for problems that we will run into in the future. It will also help us archive these snippets for easy access, but will help some others out as well.
