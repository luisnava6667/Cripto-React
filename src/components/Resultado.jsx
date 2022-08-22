import styled from "@emotion/styled";
const Result = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Parrafo = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;
const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Result>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen Cripto"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Parrafo>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Parrafo>
        <Parrafo>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Parrafo>
        <Parrafo>
          Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Parrafo>
        <Parrafo>
          Última Actualización: <span>{LASTUPDATE}</span>
        </Parrafo>
      </div>
    </Result>
  );
};

export default Resultado;
