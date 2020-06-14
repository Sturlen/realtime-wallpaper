import React, { createContext, useState, ReactNode } from "react"
import globalHook, { Store } from "use-global-hook"

const MS_PER_DAY = 86400000

export interface TODTrack {
  /**
   * Progress is defined as a percentage, here a float number between 0 and 1
   */
  progress: number
}

export interface TODTrackActions {
  setProgress(progress: number): void
  update(now: Date): void
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

/**
 * Update the TOD track with a new date object
 * @param store
 * @param now Current time and date
 */
const update = (store: Store<TODTrack, TODTrackActions>, now: Date): void => {
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const ms_since_midnight = now.getTime() - midnight.getTime()
  const current_fraction = ms_since_midnight / MS_PER_DAY
  setProgress(store, current_fraction)
}

const actions = {
  setProgress,
  update,
}

const empty_track = {
  progress: 0,
}

export const useTimeOfDay = globalHook<TODTrack, TODTrackActions>(
  React,
  empty_track,
  actions
)
