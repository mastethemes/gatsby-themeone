import React, { useState, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const ServiceSelection = () => {
    return (
        <>
            <Grid container justify="center" spacing={0}>
                <Grid item>Hotels</Grid>
                <Grid item>Tours</Grid>
                <Grid item>Flights</Grid>
                <Grid item>Excursions</Grid>
            </Grid>
        </>
    )
}

export default ServiceSelection
