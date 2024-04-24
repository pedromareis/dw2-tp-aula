import { Link } from "react-router-dom";
import { Tag, Button } from "antd";
import { casas } from "../data/casas";

const ListHouses = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          padding: "24px 72px",
          justifyContent: "center",
        }}
      >
        {casas.map((casa) => (
          <div
            style={{
              backgroundColor: "#fafafa",
              borderRadius: 8,
              padding: "32px 16px",
              width: 500,
              textAlign: "center",
            }}
          >
            {casa.tipo && (
              <Tag
                color={casa.tipo === "arrendar" ? "#f50" : "#87d068"}
                style={{ fontSize: 24, padding: 8 }}
              >
                {casa.tipo}
              </Tag>
            )}

            <h3>{casa.nome}</h3>
            <p>{casa.descricao}</p>
            <p style={{ fontSize: 20 }}>{casa.morada}</p>
            <p style={{ fontSize: 32, fontWeight: "bold" }}>
              {casa.preco ? casa.preco + "€" : "- €"}
            </p>
          </div>
        ))}
      </div>

      <Button
        type="primary"
        style={{ fontSize: 30, height: "auto", padding: 24 }}
      >
        <Link to="/edit">Adicionar casa</Link>
      </Button>
    </>
  );
};

export default ListHouses;
