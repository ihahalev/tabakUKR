import Intro from '../components/Intro'
import Advantage from '../components/Advantage'
import MainLayout from '../components/MailLayout'

const Home: React.FC = function () {
  return (
    <MainLayout>
      <Intro></Intro>
      <Advantage></Advantage>
    </MainLayout>
  )
}

export default Home