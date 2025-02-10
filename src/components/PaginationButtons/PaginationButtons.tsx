import { UsePage } from "../../context/PageContext/PageContext";
import * as S from "./styles";

const PaginationButtons = () => {
  const { setCurrentPage, currentPage, totalPages } = UsePage();

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((next) => next + 1);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <S.WrapperButtons>
      <S.Button
        onClick={prevPage}
        style={{ cursor: currentPage === 1 ? "no-drop" : "pointer" }}
      >
        Voltar
      </S.Button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <S.Button
        onClick={nextPage}
        style={{ cursor: currentPage === totalPages ? "no-drop" : "pointer" }}
      >
        Avançar
      </S.Button>
    </S.WrapperButtons>
  );
};

export default PaginationButtons;
