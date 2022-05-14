import React, { FC, useState, useEffect } from 'react'
// libs
import { useRouter } from 'next/router'
import axios from 'src/libs/axios'
// components
import MainPanel from './mainPanel/MainPanel'
import Board from './board/Board'
// constants
import ENDPOINTS from 'src/constants/endpoints'
// types
import { IAccount } from 'src/types'
// styles
import { DashboardContainerStyled } from './Dashboard.styles'

const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  createdAt: '',
}

const Dashboard: FC = () => {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<IAccount>(initialState)
  const userId = Number(router.query.id)

  useEffect(() => {
    if (userId) {
      axios
        .get(ENDPOINTS.GET.account(userId))
        .then((res) => setUserInfo(res.data))
        .catch((error) => {
          console.log(error)
        })
    }
    setUserInfo(initialState)
  }, [userId])

  return (
    <DashboardContainerStyled>
      <MainPanel userInfo={userInfo} userIdQuery={userId} />
      <Board userIdQuery={userId} />
    </DashboardContainerStyled>
  )
}

export default Dashboard
