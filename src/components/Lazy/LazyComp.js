import React, { lazy, Suspense } from 'react'
const MyLazyCom =lazy(()=>import("./Com1"))
function LazyComp() {
  return (
    <div>
      <Suspense fallback={<div>it is loading</div>}>
      <MyLazyCom/>
      </Suspense>
    </div>
  )
}

export default LazyComp

