import type { Entry } from 'contentful';
import { useEffect, useState } from 'react';
import { getEvent } from '../services/contentful';
import type { Event } from '../types';

export const usePreviewMode = (
  event: Entry<Event>,
  pastEvents: Entry<Event>[],
  year?: string,
): [Entry<Event>, Entry<Event>[]] => {
  const [previewEvent, setPreviewEvent] = useState<Entry<Event>>(event);
  const [previewPastEvents, setPreviewPastEvents] = useState(pastEvents);

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      if (params.has('preview') || sessionStorage.getItem('preview')) {
        sessionStorage.setItem('preview', 'true');
        document.body.classList.add('preview');
        document.body.classList.add('preview--loading');
        const [a, b] = await getEvent({
          includePastEvents: true,
          isPreview: true,
          year,
        });
        setPreviewEvent(a);
        setPreviewPastEvents(b);
        document.body.classList.remove('preview--loading');
      }
    })();
  }, [event]);

  return [previewEvent, previewPastEvents];
};
