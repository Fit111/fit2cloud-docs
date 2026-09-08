function setDocsProduct(pathname) {
  const p = pathname || (typeof window !== 'undefined' ? window.location.pathname : '');
  let product = '';
  if (p.includes('/jumpserver')) {
    product = 'jumpserver';
  } else if (p.includes('/sqlbot')) {
    product = 'sqlbot';
  } else if (p.includes('/1panel')) {
    product = '1panel';
  } else if (p.includes('/dataease')) {
    product = 'dataease';
  }
  if (typeof document === 'undefined') {
    return;
  }
  if (product) {
    document.documentElement.dataset.docsProduct = product;
  } else {
    delete document.documentElement.dataset.docsProduct;
  }
}

export function onRouteDidUpdate({location}) {
  setDocsProduct(location.pathname);
}

setDocsProduct();
