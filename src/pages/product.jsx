import React from "react"
import styled from "styled-components"
import { Grid } from "@material-ui/core"
import sea from "../images/sea.jpg"

// Components
import Layout from "../components/Layout"
import { Title, BigTitle, Subtitle, BigTitleThin } from "../elements/Titles"

const ImgAnimated = styled.div`
    background-image: url(${sea});
`

const ProductWrapper = styled.div``

const SideStroke = styled.div`
    color: white;
    width: 100%;
    height: 1px;
    background: white;
    display: inline-block;
    vertical-align: middle;
`

const Product = () => (
    <>
        <Layout />
        <div>
            <ImgAnimated className="zoomin" />
            <div>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={2}>
                        <SideStroke />
                    </Grid>
                    <Grid item xs={4}>
                        <p className="textColor2">Hot places</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <BigTitle className="textColor2">Santorini</BigTitle>
                        <BigTitleThin className="textColor2">
                            Island
                        </BigTitleThin>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    justify="center"
                >
                    <Grid container xs={8}>
                        <Grid item xs={4}>
                            <div>min. price</div>
                            <div>
                                1,290 <span>€</span>
                            </div>
                            <div>
                                <strong>7 days tour</strong> on 2 people
                            </div>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    </>
)

export default Product
