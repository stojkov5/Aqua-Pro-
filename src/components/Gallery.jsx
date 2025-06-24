import React, { useState } from "react";
import { Row, Col, Pagination, Image } from "antd";
import "../styles/Gallery.css";

const images = Array.from({ length: 50 }, (_, i) => ({
  src: `/Gallery/${i + 1}.webp`,
}));

const IMAGES_PER_PAGE = 12;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Row justify="center" className="py-30">
      <Col span={20}>
        <div className="gallery-wrapper">
          
          <Row gutter={[24, 24]}>
            {currentImages.map((img, index) => (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={8}
                lg={6}
               
                className="gallery-col"
              >
                <div className="gallery-card">
                  <Image
                    src={img.src}
                    alt={`Gallery ${startIndex + index + 1}`}
                    className="gallery-img"
                    loading="lazy"
                    preview={{ mask: <div style={{ color: 'white' }}>Preview</div> }}
                  />
                </div>
              </Col>
            ))}
          </Row>

          <div className="gallery-pagination">
            <Pagination
              current={currentPage}
              pageSize={IMAGES_PER_PAGE}
              total={images.length}
              onChange={handlePageChange}
              showSizeChanger={false}
              className="custom-pagination"
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Gallery;
