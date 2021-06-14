import React, { useEffect, useRef } from "react";

function InfiniteScroll({
  mainWrapper = null,
  children,
  loader,
  dipatchScroll,
}) {
  let mainWrapperRef = useRef();

  const triggerScroll = React.useCallback(
    (mainWrapperRef) => {
      if (
        mainWrapperRef.current &&
        Object.keys(mainWrapperRef.current).length > 0
      ) {
        const element = mainWrapperRef.current;
        element.onscroll = (e) => {
          if (
            e.target.scrollWidth - e.target.scrollLeft - e.target.offsetWidth <
            100
          ) {
            dipatchScroll({ scrollHeight: e.target.scrollHeight });
          }
        };
      }
    },
    [mainWrapperRef, dipatchScroll]
  );

  useEffect(() => {
    triggerScroll(mainWrapperRef);
  }, [triggerScroll]);

  return React.cloneElement(mainWrapper, { ref: mainWrapperRef }, [
    ...children,
    loader,
  ]);
}

export default InfiniteScroll;
