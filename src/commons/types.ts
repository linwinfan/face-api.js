import * as tf from '@tensorflow/tfjs-core';

export type ConvParams = {
  filters: tf.Tensor4D
  bias: tf.Tensor1D
}

export type ExtractWeightsFunction = (numWeights: number) => Float32Array

export type BatchReshapeInfo = {
  originalWidth: number
  originalHeight: number
  paddingX: number
  paddingY: number
}

export type ParamMapping = {
  originalPath?: string
  paramPath: string
}