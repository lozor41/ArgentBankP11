import Hero from '../../components/hero/Hero'
import Feature from '../../components/feature/Feature'
import chatIcon from '../../assets/icon-chat_1.webp'
import moneyIcon from '../../assets/icon-money_1.webp'
import securityIcon from '../../assets/icon-security.webp'
import '../index/index.css'

function Home() {
  return (
    <main className="home">
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          image={chatIcon}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          image={moneyIcon}
          alt="Chat Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          image={securityIcon}
          alt="Chat Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is
          always safe."
        />
      </section>
    </main>
  )
}

export default Home