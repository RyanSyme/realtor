import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button} from '@chakra-ui/react'

const Banner = ({ purpose, imageUrl, title1, title2, desc1, desc2, buttonText, linkName })=> (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} alt='Banner' />
    <Box p='5'>
      <Text color='grey.500' fontSize='sm' fontWeight='medium' >{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold' >{title1}<br/>{title2}</Text>
      <Text color='grey.700' fontSize='lg' paddingTop='3' paddingBottom='3'>{desc1}<br/>{desc2}</Text>
      <Button fontSize='xl' fontWeight='bold'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <Box>
      <Banner 
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Expore Apartments, Villas, Homes'
        desc2='and more...'
        buttonText='Expore Rentals'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap='wrap' >
        {/*Fetch and map properties*/}
      </Flex>
      <Banner 
        purpose='BUY A HOME'
        title1='Find, Buy and Own Your'
        title2='Dream Home'
        desc1='Expore Apartments, Villas, Homes'
        desc2='and more...'
        buttonText='Expore For Sale'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap='wrap' >
        {/*Fetch and map properties*/}
      </Flex>
    </Box>
  )
}
