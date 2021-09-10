import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Pagination = ({ page, setPage, isPrevData, hasMore }) => {
  return (
    <Container className="pb-3">
      <hr className="my-3" />
      <div className="d-flex justify-content-around align-items-center my-3">
        <Button
          variant="secondary"
          disabled={isPrevData || page === 1}
          onClick={() => setPage({ page: Math.max(page - 1, 1) })}
        >
          &laquo; Previous
        </Button>

        <span className="fw-bold">Current page: {page} </span>

        <Button
          variant="secondary"
          disabled={isPrevData || !hasMore}
          onClick={() => {
            if (!isPrevData && hasMore) {
              setPage({ page: page + 1 });
            }
          }}
        >
          Next &raquo;
        </Button>
      </div>
    </Container>
  );
};

export default Pagination;
