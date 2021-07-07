import { HStack, Image, Center, VStack, Box } from "@chakra-ui/react"

const Card = ({image, jobTitle, companyName, shortDesc}) => {
    return(
        <HStack spacing="24px" bg='white' borderRadius="20px"  boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" p="30px" cursor="pointer">
            <VStack spacing="20px">
                <HStack justify="flex-start" w="100%" spacing="30px">
                    <Center bg="#f5f2fd" borderRadius="6px" p="10px" w="50px" h="50px">
                        <Image src={image} alt="Vercel" className="logo" />
                    </Center>
                    <VStack align="flex-start" spacing="15px">
                        <Box fontWeight="bold" fontSize="15px">
                            {jobTitle}
                        </Box>
                        <Box fontSize="13px">
                            {companyName}
                        </Box>
                    </VStack>
                </HStack>
                <Box>
                    <Box fontSize="10px" color="#8b9199">
                        {shortDesc}
                    </Box>
                </Box>
           
            </VStack>
           

        </HStack>
    )
}

export default Card