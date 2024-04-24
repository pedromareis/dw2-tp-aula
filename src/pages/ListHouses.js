import { Link } from "react-router-dom";
import { Tag, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
// import { casas } from "../data/casas";

const ListHouses = ({ supabase }) => {
  const [casas, setCasas] = useState([]);

  const getCasas = async () => {
    const { data } = await supabase.from("casas").select();
    console.log(data);
    setCasas(data);
  };

  useEffect(() => {
    getCasas();
  }, []);

  const deleteCasa = async (id) => {
    await supabase.from("casas").delete().eq("id", id);
    getCasas();
  };

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
            key={casa.id}
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
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <Button
                type="primary"
                style={{ fontSize: 24, height: "auto", padding: 16 }}
                icon={<EditOutlined />}
              >
                <Link to={`/edit/${casa.id}`}>Editar</Link>
              </Button>
              <Button
                type="primary"
                danger
                style={{ fontSize: 24, height: "auto", padding: 16 }}
                icon={<DeleteOutlined />}
                onClick={() => deleteCasa(casa.id)}
              >
                Apagar
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        type="primary"
        style={{ fontSize: 30, height: "auto", padding: 24 }}
      >
        <Link to="/add">Adicionar casa</Link>
      </Button>
    </>
  );
};

export default ListHouses;
