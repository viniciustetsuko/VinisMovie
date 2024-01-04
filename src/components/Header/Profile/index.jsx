import { ContainerP } from "./style";

export function Profile() {
  return (
    <ContainerP to='/profile'>
      <div>
        <strong>Vinicius Tetsuko</strong>
        <span>Sair</span>
      </div>
      
      <img src='https://github.com/viniciustetsuko.png' alt='foto de perfil' />
    </ContainerP>
  );
}
