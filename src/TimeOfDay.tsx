import React, { createContext, useState, ReactNode } from "react"
import globalHook, { Store } from "use-global-hook"

export interface TODTrack {
  /**
   * Progress is defined as a percentage, here a float number between 0 and 1
   */
  progress: number
}

export interface TODTrackActions {
  setProgress(progress: number): void
}

/**
 * Limits progress betweeb zero and one
 * @param store
 * @param newnum
 */
const setProgress = (
  store: Store<TODTrack, TODTrackActions>,
  newnum: number
): void => {
  const progress = Math.min(1, Math.max(0, newnum))
  store.setState({ ...store.state, progress })
}

const actions = {
  setProgress,
}

const empty_track = {
  progress: 0,
}

export const useTimeOfDay = globalHook<TODTrack, TODTrackActions>(
  React,
  empty_track,
  actions
)
