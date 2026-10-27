import React, { useCallback, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import useStyles from './Hero.styles'

import dashboard from '../../assets/img/hero/display-intelligence-dashboard.png'
import map from '../../assets/img/hero/map-insights.png'
import analyse from '../../assets/img/hero/display-intelligence-analyse.png'

export const DIRECTCO_URL = 'https://directco.co.nz'

const SLIDES = [
  {
    src: dashboard,
    path: 'directco.co.nz/supplier/display-intelligence',
    title: 'Display Intelligence',
    text: 'AI-scored compliance, shelf share and empty space across every store, broken down by customer type.',
    alt: 'Directco Display Intelligence dashboard: compliance, shelf share and store breakdown',
  },
  {
    src: map,
    path: 'directco.co.nz/supplier/map',
    title: 'Map insights',
    text: 'Sales, distribution points and purchasing outlets for 8,000 stores, filtered by brand and product.',
    alt: 'Directco map of New Zealand showing customer insights and geographic sales analysis',
  },
  {
    src: analyse,
    path: 'directco.co.nz/supplier/display-intelligence/analyse',
    title: 'Photo analysis',
    text: 'Pick customers and shelf photos, trigger AI analysis on AWS Bedrock, and review the results.',
    alt: 'Directco Display Intelligence manual analysis: selecting customers and photos for AI review',
  },
]

const INTERVAL_MS = 6500

const LockIcon = () => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
    <path d="M5 0a3 3 0 0 0-3 3v2H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8V3a3 3 0 0 0-3-3zm0 1.4A1.6 1.6 0 0 1 6.6 3v2H3.4V3A1.6 1.6 0 0 1 5 1.4z" />
  </svg>
)

const Chevron = ({ direction }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {direction === 'prev' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
  </svg>
)

// Browser-framed, auto-cycling showcase of the Directco platform. The screenshot itself is a
// link to the live site; dots and arrows sit beside the link rather than inside it so the
// markup stays valid. Autoplay pauses on hover/focus and while the tab is hidden.
export default function Hero() {
  const classes = useStyles()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hidden, setHidden] = useState(false)
  const timer = useRef(null)

  const go = useCallback((next) => setIndex((i) => (next + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (paused || hidden) return undefined
    timer.current = setTimeout(() => go(index + 1), INTERVAL_MS)
    return () => clearTimeout(timer.current)
  }, [index, paused, hidden, go])

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(index + 1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(index - 1)
    }
  }

  const slide = SLIDES[index]
  const running = !(paused || hidden)

  return (
    <section
      className={classes.root}
      aria-roledescription="carousel"
      aria-label="Directco platform screenshots"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
      onKeyDown={onKeyDown}
    >
      <div className={classes.frame}>
        <div className={classes.chrome} aria-hidden="true">
          <div className={classes.lights}>
            <span />
            <span />
            <span />
          </div>
          <div className={classes.urlBar}>
            <LockIcon />
            {slide.path}
          </div>
          <div className={classes.counter}>
            {index + 1} / {SLIDES.length}
          </div>
        </div>

        <a
          className={classes.viewport}
          href={DIRECTCO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${slide.title}: open directco.co.nz in a new tab`}
        >
          {SLIDES.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={i === index ? s.alt : ''}
              className={clsx(classes.slide, i === index && classes.slideActive)}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              aria-hidden={i !== index}
            />
          ))}
        </a>

        <div className={classes.caption}>
          <div className={classes.captionText} aria-live="polite">
            <strong>{slide.title}</strong>
            {slide.text}
          </div>
          <a className={classes.captionCta} href={DIRECTCO_URL} target="_blank" rel="noopener noreferrer">
            Open directco.co.nz →
          </a>
          <div
            key={index}
            className={clsx(classes.progress, !running && classes.progressPaused)}
            style={{ animationDuration: `${INTERVAL_MS}ms` }}
            aria-hidden="true"
          />
        </div>

        <div className={classes.dots} role="tablist" aria-label="Choose screenshot">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${s.title} (${i + 1} of ${SLIDES.length})`}
              className={clsx(classes.dot, i === index && classes.dotActive)}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>

      <button type="button" className={clsx(classes.arrow, classes.arrowPrev)} onClick={() => go(index - 1)} aria-label="Previous screenshot">
        <Chevron direction="prev" />
      </button>
      <button type="button" className={clsx(classes.arrow, classes.arrowNext)} onClick={() => go(index + 1)} aria-label="Next screenshot">
        <Chevron direction="next" />
      </button>
    </section>
  )
}
