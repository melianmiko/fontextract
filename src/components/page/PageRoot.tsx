import { type PropsWithChildren, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from './ThemeSwitcher';

/**
 * Page root, for standalone version
 *
 * @param props
 * @constructor
 */
export function PageRoot (props: PropsWithChildren): ReactElement {
  const { t } = useTranslation();

  return (
        <main className="extended" style={{ marginTop: 48 }}>
            <nav className="page-group">
                <ThemeSwitcher />
                <NavLink to="/"
                         className={(props) => props.isActive ? 'link_active' : ''}>
                    {t('Application')}
                </NavLink>
                <NavLink to="/about"
                         className={(props) => props.isActive ? 'link_active' : ''}>
                    {t('About')}
                </NavLink>
            </nav>
            {props.children}
        </main>
  );
}
