---
title: 算法中的田忌赛马
description: 算法中的田忌赛马
date: 2022-05-07 19:40:00
image: /img/algorithm.webp
categories: posts
---

# hahah 我神功大成了
## hahah 我神功大成了


```ts
import { describe, expect, it } from 'vitest'

describe('分割数组的最大值', () => {
  it('1', () => {
    const nums1 = [2, 7, 11, 15]
    const nums2 = [1, 10, 4, 11]
    const res = [2, 11, 7, 15]
    expect(advantageCount(nums1, nums2)).toEqual(res)
  })

  it('2', () => {
    const nums1 = [12, 24, 8, 32]
    const nums2 = [13, 25, 32, 11]
    const res = [24, 32, 8, 12]
    expect(advantageCount(nums1, nums2)).toEqual(res)
  })

  it('3. 元素重复', () => {
    const nums1 = [2, 0, 4, 1, 2]
    const nums2 = [1, 3, 0, 0, 2]
    // 此处可能存在多个答案，合理即可
    const res = [2, 4, 2, 1, 0]
    expect(advantageCount(nums1, nums2)).toEqual(res)
  })
})
```
