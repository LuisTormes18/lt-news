import Head from "next/head";
import React from 'react'
import PropTypes from 'prop-types'

const Title = ({title, description}) => {
	return (
		 <Head>
                <title>{title} </title>
                <meta name="description" content="web site of news" />
                <link rel="icon" href="/favicon.ico" />
        </Head>
	)
}

Title.propTypes = {
	title: PropTypes.string,
}

export default Title