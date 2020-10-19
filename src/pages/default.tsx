import React from 'react'
import { PageContainer } from '../components/__styled__/container'

const DefaultPage = () => (
  <PageContainer>
    <p className="title">我，贾梦 (工程硕士)</p>
    <ul className="v-slides">
      <li className="v-slide">(en.) I'am Meng (M.Eng)</li>
      <li className="v-slide">(fr.) Je suis Meng (M.Eng)</li>
    </ul>
  </PageContainer>
)

export default DefaultPage
