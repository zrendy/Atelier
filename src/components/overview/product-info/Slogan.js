

export default function Slogan ({slogan, description, features}) {
  // console.log('here',slogan, description)
  return (
    <div className="slogan" data-testid="slogan">
      <section className="description">
      <h1 key={slogan}>{slogan}</h1>
      <p key={description}>{description}</p>
      </section>
      <section className="characteristics">
        <ul className="features">
          {Array.isArray(features) ? features.map((feature, i)=>{return <li  key={i}>{feature.value} {feature.feature}</li>}): null}
        </ul>
      </section>
    </div>
  )
}