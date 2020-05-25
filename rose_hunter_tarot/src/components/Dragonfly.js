import React, { useEffect, useState } from 'react'
import Drawn from './Drawn'
import { Grid, Container } from '@material-ui/core'

export default function Dragonfly() {
  const [drawn, setDrawn] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchCards() {
    const response = await fetch('http://localhost:3000/spreads/dragonfly')
    const json = await response.json()

    setDrawn(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchCards()
  }, [])

  return (
    <>
      {loading ? (
        "Reading the cards..."
      ) : (
          <div style={{ flexGrow: 1 }}>
            <Grid container justify="center">
              <Grid item>
                <Drawn card={drawn[8]} spread_pos="Vision" spread_meaning="What can be done" />
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Drawn card={drawn[6]} spread_pos="Wisdom" spread_meaning="What you can't control" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[2]} spread_pos="Mind" spread_meaning="The emotional landscape" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[3]} spread_pos="Body" spread_meaning="The physical landscape" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[7]} spread_pos="Intellect" spread_meaning="What you can control" />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item>
                  <Drawn card={drawn[4]} spread_pos="Mystery" spread_meaning="The hidden influence" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[0]} spread_pos="Present" spread_meaning="The situation as it stands" />
                </Grid>
                <Grid item>
                  <Drawn card={drawn[5]} spread_meaning="The obstacle" spread_pos="Strife" />
                </Grid>
              </Grid>
              <Grid item>
                <Drawn card={drawn[1]} spread_meaning='What brought you here' spread_pos="Past" />
              </Grid>
            </Grid>
          </div>
        )
      }
    </>
  )
}