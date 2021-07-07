import Card from "./Card"

const imageUrl = ["/bxl-amazon.svg", "/bxl-slack.svg", "/bxl-discord.svg", "/bxl-twitch.svg", "/bxl-apple.svg", "/bxl-google.svg", "/bxl-facebook.svg", "/bxl-spotify.svg", "/bxl-microsoft.svg", "/bxl-dropbox.svg", "/bxl-visa.svg", "/bxl-gitlab.svg"]

const CardList = ({data, filtredJobs}) => (
    <>
    {
        data && data.jobs && filtredJobs.map((job, index) => (
            <Card key={job.jobId} image={imageUrl[index]} jobTitle={job.jobTitle} companyName={job.companyName} shortDesc={job.shortDesc} />
        ))
    }
    </>
)

export default CardList