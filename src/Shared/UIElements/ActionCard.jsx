import * as React from 'react';
import { Card, CardHeader, CardBody, CardFooter,Button, ButtonGroup, Stack, Heading, Text, Divider, Image } from '@chakra-ui/react'

export default function ActionAreaCard(props) {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={props.description.image}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{props.title}</Heading>
          <Text>
            {props.description.description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      
    </Card>
  );
}
