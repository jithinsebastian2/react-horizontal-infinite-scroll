# What is this?

To handle infinite scroll with a simple, lightweight and high responsive manner with this infinite-scroll-package.

# Installation

`npm i react-horizontal-infinite-scroll --save`

`yarn add react-horizontal-infinite-scroll`

# How to use

```
import InfiniteScroll from 'react-horizontal-infinite-scroll';

<InfiniteScroll
    mainWrapper={<div className='infinite-scroll-wrapper' />}
    loader={<div/>}
    dipatchScroll={(scrollInfo={}) => {}}
>
    {children} //<-- All the children elements which are used to load under the scroll wrapper.
</InfiniteScroll>

```

## Props

- _mainWrapper_ (Required) - The wrapper element for the Infinite scroll.
- _loader_ (Required) - Loader component which is used to show the loading state for infinite scroll.
- _dipatchScroll_ (Required) - Callback event for identify and update the children for each scroll end.
