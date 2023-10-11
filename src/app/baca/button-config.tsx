'use client'

import { SettingsIcon } from '@chakra-ui/icons'
import { Button, Card, Checkbox, CheckboxGroup, Divider, FormControl, FormLabel, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { CONSONANTS, VOCALS } from '../shared'

const ConfigButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { control } = useFormContext()
  return (
    <>
      <IconButton colorScheme="purple" aria-label='settings' icon={<SettingsIcon />} onClick={onOpen}  />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={'full'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Konfigurasi</ModalHeader>
          <Divider />
          <ModalBody>
            <Stack>
              <Controller
                control={control}
                name="consonants"
                render={({ field }) => (
                  <FormControl>
                    <FormLabel>Konsonan</FormLabel>
                    <CheckboxGroup
                      defaultValue={field.value}
                      value={field.value}
                      onChange={value => {
                        if (field.value.length === 1 && value.length === 0) {
                          return alert("Minimal harus dipilih 1 huruf konsonan")
                        }
                        field.onChange(value)
                      }}
                    >
                      <SimpleGrid columns={3}>
                        <Stack>
                          {CONSONANTS.slice(0, 7).map((c, i) => (
                            <Checkbox colorScheme='purple' key={c} value={c}>
                              {c}
                            </Checkbox>
                          ))}
                        </Stack>
                        <Stack>
                          {CONSONANTS.slice(7, 14).map((c, i) => (
                            <Checkbox colorScheme='purple' key={c} value={c}>
                              {c}
                            </Checkbox>
                          ))}
                        </Stack>
                        <Stack>
                          {CONSONANTS.slice(14).map((c, i) => (
                            <Checkbox colorScheme='purple' key={c} value={c}>
                              {c}
                            </Checkbox>
                          ))}
                        </Stack>
                      </SimpleGrid>
                    </CheckboxGroup>
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name="vocals"
                render={({ field }) => (
                  <FormControl>
                    <FormLabel>Vokal</FormLabel>
                    <CheckboxGroup
                      defaultValue={field.value}
                      value={field.value}
                      onChange={value => {
                        if (field.value.length === 1 && value.length === 0) {
                          return alert("Minimal harus dipilih 1 huruf vokal")
                        }
                        field.onChange(value)
                      }}
                    >
                      <SimpleGrid columns={3}>
                        <Stack>
                          {VOCALS.slice(0, 2).map((c, i) => (
                            <Checkbox colorScheme='purple' key={c} value={c}>
                              {c}
                            </Checkbox>
                          ))}
                        </Stack>
                        <Stack>
                          {VOCALS.slice(2, 4).map((c, i) => (
                            <Checkbox colorScheme='purple' key={c} value={c}>
                              {c}
                            </Checkbox>
                          ))}
                        </Stack>
                        <Stack>
                          {VOCALS.slice(4).map((c, i) => (
                            <Checkbox colorScheme='purple' key={c} value={c}>
                              {c}
                            </Checkbox>
                          ))}
                        </Stack>
                      </SimpleGrid>
                    </CheckboxGroup>
                  </FormControl>
                )}
              />
            </Stack>
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Button colorScheme='purple' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConfigButton