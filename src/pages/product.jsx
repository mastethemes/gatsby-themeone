import React from "react"
import styled from "styled-components"
import { Grid } from "@material-ui/core"
import { ArrowForwardIos } from "@material-ui/icons"
import sea from "../images/sea.jpg"

// Components
import Layout from "../components/Layout"
import {
    Title,
    BigTitle,
    Subtitle,
    BigTitleThin,
    SmallLabel,
    MediumLabel,
    BigLabel
} from "../elements/Titles"

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
                    <Grid container item spacing={4} xs={8}>
                        <Grid item xs={4}>
                            <SmallLabel className="textColor2">
                                min. price
                            </SmallLabel>
                            <BigLabel className="textColor2">
                                1,290 <span>€</span>
                            </BigLabel>
                            <MediumLabel className="textColor2">
                                <strong>7 days tour</strong> on 2 people{" "}
                                <ArrowForwardIos />
                            </MediumLabel>
                        </Grid>
                        <Grid item xs={4}>
                            <SmallLabel className="textColor2">
                                5 stars
                            </SmallLabel>
                            <BigLabel className="textColor2">
                                <strong>26</strong>
                            </BigLabel>
                            <MediumLabel className="textColor2">
                                <strong>hotels</strong> to choice{" "}
                                <ArrowForwardIos />
                            </MediumLabel>
                        </Grid>
                        <Grid item xs={4}>
                            <SmallLabel className="textColor2">
                                flight date
                            </SmallLabel>
                            <BigLabel className="textColor2">
                                <strong>18</strong>
                            </BigLabel>
                            <MediumLabel className="textColor2">
                                <strong>jule</strong> or later{" "}
                                <ArrowForwardIos />
                            </MediumLabel>
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
