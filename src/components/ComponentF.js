import React from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext>
                                {
                                    channel => {
                                        return (
                                            <div>User context value {user}</div>
                                        )
                                    }
                                }
                            </ChannelContext>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF