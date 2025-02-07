# React useEffect Cleanup Function Issue

This repository demonstrates a problem with the cleanup function in React's `useEffect` hook.  The expected behavior is that the cleanup function should run when the component unmounts. However, in this example, the logs indicating component mounting and unmounting are not consistently displayed.

## Problem

The `useEffect` hook is used to log messages when the component mounts and unmounts. The cleanup function within the `useEffect` should ensure that the 'Component unmounted' log appears when the component is removed from the DOM.  However, this is not consistently happening, suggesting a possible issue with the cleanup logic or component lifecycle management. 

## Solution

The solution provided addresses the issue and ensures that the cleanup function executes correctly upon component unmounting.