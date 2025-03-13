import { Container, Flex, Tabs } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base:"column"
        }}
      >
        <Tabs.Root 
          defaultValue="home"
          size="lg"
        >
          <Tabs.List>
            <Tabs.Trigger value="clothes">
              Clothes
            </Tabs.Trigger>
            <Tabs.Trigger value="outfits">
              Saved Outfits
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="clothes">Save pieces</Tabs.Content>
          <Tabs.Content value="outfits">Save outfits</Tabs.Content>
        </Tabs.Root>
      </Flex>
    </Container>
  )
}

export default HomePage