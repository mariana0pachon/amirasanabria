const fotoPerfil = new URL("../assets/images/about.jpeg", import.meta.url);

export function About() {
  return (
    <div className='about'>
      <div className='descripcion'>
        <div>
          Soy diseñadora colombiana, estoy profundamente interesada en la
          investigación visual en el cine. Me cuestiono sobre la creación de
          narrativas a partir del espacio y la posibilidad de descentrar la
          mirada antropomórfica en el universo audiovisual. Por otro lado, me
          interesa la exploración material de los oficios, el hacer y la cultura
          popular en América Latina.
        </div>
        <br></br>
        <div>
          I am a Colombian designer with a profound interest in visual research
          for cinema. My intellectual pursuits delve into the exploration of
          narratives crafted from the space, challenging the conventional
          anthropomorphic point of view. I am driven by a curiosity that seeks
          to transcend the human-centric perspective, opening up new dimensions
          for storytelling within the cinematic universe.
        </div>
      </div>
      <div>
        <img src={fotoPerfil} alt='Foto Perfil' className='foto-perfil' />
        <div className='contact'>
          <a href="mailto:amira@sanabria.io">
            <div>e-mail</div>
            <div>amira@sanabria.io</div>
          </a>
        </div>
      </div>
    </div>
  );
}
