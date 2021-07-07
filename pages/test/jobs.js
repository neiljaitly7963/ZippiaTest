import React, { useState, useEffect } from 'react'
import CardList from '../../components/CardList'
import { Box, Grid, Heading, Input, Divider, Switch, VStack, HStack, Text } from "@chakra-ui/react"

function Jobs({ data }) {
    const [filtredJobs, setFiltredJobs] = useState(data.jobs.slice(0, 12))
    const [postDateFilter, setPostDateFilter] = useState(false)
    const [searchFiled, setSearchFiled] = useState('')

    const onInputChange = (event) => {
        setSearchFiled(event.target.value)
    }

    const onSwitchChange = () => {
        setPostDateFilter(!postDateFilter)
    }

    const filterJobsFunction = () => {
        const filtredJobs = data.jobs.slice(0, 12).filter((job) => {
            let date = Number(job.postedDate.replace('d ago', ''))
            let maxDays = postDateFilter ? 7 : 1000000
            return job.companyName.toLowerCase().includes(searchFiled.toLowerCase()) && date < maxDays
        })
        setFiltredJobs(filtredJobs)
    }

    useEffect(() => {
        filterJobsFunction()
    }, [postDateFilter, searchFiled])

    return (
        <Box bg="#f6f8fc" h="100%" p="20px" fontFamily="'Lato', sans-serif" >

            <VStack>
                <Heading as="h3" size="lg">
                    Job Board
                </Heading>
                <Input w="200px" type="tel" placeholder="search organization" borderColor="#DFDFDF" onChange={onInputChange} />
                <HStack>
                    <Switch size="md" onChange={onSwitchChange} isChecked={postDateFilter} />
                    <Text>jobs posted in the last week</Text>
                </HStack>
            </VStack>

            <Divider m="20px 0px" />

            <Grid gridGap="40px" gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))" gridTemplateRows="1fr">
                <CardList data={data} filtredJobs={filtredJobs} />
            </Grid>
        </Box >
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://www.zippia.com/api/jobs/`, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "companySkills": true,
            "dismissedListingHashes": [],
            "fetchJobDesc": true,
            "jobTitle": "Business Analyst",
            "locations": [],
            "numJobs": 20,
            "previousListingHashes": []
        })
    })
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Jobs
