import { useEffect } from 'react';

function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | FT7 GAME` : 'FT7 GAME';
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = description || 'FT7 Game information, guides, updates, and general resources.';

    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const tag = document.createElement('meta');
      tag.name = 'description';
      tag.content = descriptionText;
      document.head.appendChild(tag);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    } else {
      const ogTag = document.createElement('meta');
      ogTag.setAttribute('property', 'og:title');
      ogTag.setAttribute('content', fullTitle);
      document.head.appendChild(ogTag);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', descriptionText);
    } else {
      const socialTag = document.createElement('meta');
      socialTag.setAttribute('property', 'og:description');
      socialTag.setAttribute('content', descriptionText);
      document.head.appendChild(socialTag);
    }
  }, [title, description]);

  return null;
}

export default PageMeta;
