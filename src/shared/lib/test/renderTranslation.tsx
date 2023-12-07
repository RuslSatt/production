import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nTest';

export const renderTranslation = (component: ReactNode) => <I18nextProvider i18n={i18n}>{component}</I18nextProvider>;