import React from 'react';
import Link from 'components/Link';
import cn from 'classnames';
import Price from 'components/Price';
import { Modal, Button } from 'flowbite-react';

export const ProductContent = ({
    type,
    url,
    ASIN: { value: asin } = { value: null },
    mainImage: { value: mainImage } = { value: null },
    productTitle: { value: productTitle } = { value: null },
    ratings: { value: ratings } = { value: {} },
    priceDetail: { value: priceDetail },
    productAbout: { value: productFeatures },
    onQuickLook,
    isDetailView = false
}) => {
    const {
        priceblock_ourprice: priceBlockOutPrice,
        ounce,
        price_block_savings: priceBlockSavings
    } = priceDetail || {};
    const { rateStar, acrCustomerReviewText } = ratings || {};

    return (
        <div
            className={cn('adt-product-card shadow-md p-0 overflow-hidden', {
                detail: isDetailView
            })}>
            {!isDetailView && (
                <div
                    className={cn(
                        'py-2 text-white text-center font-bold text-lg',
                        { 'bg-purple-900': type === 'Switch' },
                        { 'bg-amber-600': type !== 'Switch' }
                    )}>
                    {type}:
                </div>
            )}
            <div className={'p-8'}>
                <div className="adt-product-title" title={productTitle}>
                    <a className="adt-product-title-placeholder a-size-base a-link-normal a-color-base">
                        <br />
                        <br />
                    </a>
                    <a
                        className="adt-product-title-clamped a-size-base a-link-normal a-color-base"
                        href={url}
                        target="blank">
                        <div className="clamp-lines ">
                            <div>{productTitle}</div>
                        </div>
                    </a>
                </div>
                <a href={url}>
                    <div
                        className="adt-product-image"
                        style={{
                            height: 180,
                            paddingTop: 0,
                            marginBottom: 10
                        }}>
                        <div
                            className="adt-product-image-image "
                            style={{
                                backgroundImage: `url(${mainImage})`
                            }}></div>
                    </div>
                </a>
                {isDetailView && (
                    <div className="adt-product-features">
                        <h3>Product features</h3>
                        <ul className="adt-feature-bullets a-size-base a-color-base">
                            {(productFeatures || [])
                                .filter((feature) => feature.length > 0)
                                .map((feature, index) => (
                                    <li key={`product-feature-${index}`}>
                                        {feature}
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
                {rateStar && (
                    <div className="adt-product-rating pt-2">
                        <span className="aui-average-customer-reviews">
                            <a href={`${url}}#customerReviews`}>
                                <i className={rateStar}></i>
                            </a>
                            <a
                                className="a-size-base a-link-normal a-color-base"
                                href={`${url}}#customerReviews`}>
                                {acrCustomerReviewText}
                            </a>
                        </span>
                    </div>
                )}

                <div className="adt-product-price">
                    {priceBlockOutPrice && <Price value={priceBlockOutPrice} />}
                    <span style={{ color: '#888' }}>{ounce}</span>
                </div>
                <div className="adt-product-price" style={{ color: '#888' }}>
                    {priceBlockSavings && priceBlockSavings}
                </div>
                <div className="adt-add-to-cart">
                    <div className="aui-add-to-cart " style={{ width: '100%' }}>
                        <div className="aui-add-to-cart-messages">
                            <div className="aui-spinner"></div>
                            <span className="aui-added-to-cart-message a-button-text a-color-success">
                                <i
                                    className="a-icon a-icon-success"
                                    role="img"></i>
                                Added to Cart
                            </span>
                        </div>
                        <Link
                            href="123"
                            asin={asin}
                            className="a-button-text"
                            aria-hidden="true">
                            Add to Cart
                        </Link>
                    </div>
                </div>
                {!isDetailView && (
                    <button
                        type="button"
                        className="adt-quick-look a-size-base"
                        data-modal-toggle={`defaultModal-${asin}`}
                        onClick={onQuickLook}>
                        <div className="adt-quick-look-icon a-size-base"></div>
                        Quick Look
                    </button>
                )}
            </div>
        </div>
    );
};

const ProductDetailModal = ({ show, onClose, ...props }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <Modal.Header>{props.type}</Modal.Header>
            <Modal.Body className="space-y-6">
                <ProductContent {...props} isDetailView={true} />
            </Modal.Body>
        </Modal>
    );
};

const ProductCard = (props) => {
    const [showPreviewModal, setShowPreviewModal] = React.useState(false);

    return (
        <div>
            <ProductContent
                {...props}
                isDetailView={false}
                onQuickLook={() => setShowPreviewModal(true)}></ProductContent>
            <ProductDetailModal
                {...props}
                show={showPreviewModal}
                onClose={() => setShowPreviewModal(false)}
            />
        </div>
    );
};

export default ProductCard;
