'use client'

import React from 'react'
import ConfigButton from './button-config'
import { FormProvider, useForm } from 'react-hook-form'
import { CONSONANTS, VOCALS } from '../shared';
import { Flex, Heading, Spacer } from '@chakra-ui/react';

const DEFAULT_VALUES = {
  consonants: CONSONANTS,
  vocals: VOCALS,
}

const ReadPage = () => {
  const methods = useForm<{
    consonants: string[]
    vocals: string[]
  }>({
    defaultValues: JSON.parse(JSON.stringify(DEFAULT_VALUES))
  })
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (!window.localStorage.getItem("config")) {
        window.localStorage.setItem("config", JSON.stringify(DEFAULT_VALUES))
      } else {
        methods.reset(JSON.parse(window.localStorage.getItem("config") || JSON.stringify(DEFAULT_VALUES)))
      }
    }
  }, [])
  const { watch, getValues } = methods;
  const watchedValues = watch();
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("config", JSON.stringify(watchedValues))
    }
  }, [watchedValues])
  const [text, setText] = React.useState<string[]>([])
  const generate = () => {
    const { consonants, vocals } = getValues();
    const randomizedConsonants = consonants.sort( () => .5 - Math.random() )
    const randomizedVocals = vocals.sort( () => .5 - Math.random() )
    setText(prev => [
      ...prev,
      [
        randomizedConsonants[0],
        randomizedVocals[0],
        randomizedConsonants[1],
        randomizedVocals[1],
      ].join('')
    ])
  }
  const generated = text.slice(-1)
  return (
    <FormProvider {...methods}>
      <Flex
        bg="red.100"
        height={"100vh"}
        direction={"column"}
      >
        <Flex
          bg="pink.200"
          p={4}
          alignItems="center"
        >
          <Heading size="md" color="pink.500">CALISTUNG</Heading>
          <Spacer />
          <ConfigButton />
        </Flex>
        <Flex
          bg="pink.50"
          flex={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
          onClick={generate}
        >
          <Heading
            size={"4xl"}
            textTransform={"uppercase"}
            letterSpacing={12}
            color="pink.400"
          >
            {generated}
          </Heading>
        </Flex>
      </Flex>
    </FormProvider>
  )
}

export default ReadPage