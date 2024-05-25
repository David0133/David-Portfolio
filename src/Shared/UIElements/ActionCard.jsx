import * as React from 'react';
import { Card, CardBody,Button, ButtonGroup, Stack, Heading, Text,Image } from '@chakra-ui/react'

export default function ActionAreaCard(props) {
  return (
    <Card maxW='sm' className='relative mb-4' >
      {/*  */}
      <CardBody className='h-[350px]'>
        <Image
          src={props.description.image}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.title}</Heading>
          <Text className='h-[70px] overflow-y-scroll no-scrollbar'>
            {props.description.description}
          </Text>
        </Stack>
      </CardBody>
      <CardBody className=''>
        <ButtonGroup spacing='20'>
          <a href={props.description.code_url} className={props.description.code_url==='#' ? 'disable-link' : ''}>
          <Button variant='solid' colorScheme='teal' className='btn rounded bg-blue-600 p-2'>
            View Code 
          </Button>
          </a>
          <a href={props.description.live_url} className={props.description.live_url==='#' ? 'disable-link' : ''}>
          <Button variant='solid' colorScheme='teal' className='btn rounded bg-blue-600 p-2'>
            Live Demo 
          </Button>
          </a>
        </ButtonGroup>
      </CardBody>
      
      
    </Card>
  );
}
