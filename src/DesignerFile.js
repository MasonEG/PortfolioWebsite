import React, { Component } from 'react'
import { Grommet, Box, Heading, TextInput, Button, CheckBox } from 'grommet'
import { Add, Trash } from 'grommet-icons'


const Screen1 = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()
  return (
  <Grommet style={{"height":"100vh"}}>
    <Box pad="medium" fill="vertical" align="center">
      <Heading>
        Your ToDo List
      </Heading>
      <Box pad="small" background={{"color":"brand"}} width="medium" round="small" gap="small">
        <Box align="center" justify="center" direction="row" background={{"color":"light-3"}} round="small" gap="small">
          <TextInput placeholder="add something to do" plain={true} />
          <Button label="" icon={<Add />} hoverIndicator={true} />
        </Box>
        <Box 
        pad={{"left":"small"}} 
        background={{"color":"accent-1"}} 
        direction="row" 
        round="small" 
        justify="between">
          <CheckBox label="item 1" />
          <Button label="" icon={<Trash />} hoverIndicator={true} />
        </Box>
        <Box pad={{"left":"small"}} background={{"color":"accent-1"}} direction="row" round="small" justify="between">
          <CheckBox label="item 2" />
          <Button label="" icon={<Trash />} hoverIndicator={true} />
        </Box>
      </Box>
    </Box>
  </Grommet>
  )
}

const screens = {
  1: Screen1
}

export default () => {
  const [screen, setScreen] = React.useState(1)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
