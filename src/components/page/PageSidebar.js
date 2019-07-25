import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import tangoMail from '../../images/tango-mail-icon.svg';
import tangoPage from '../../images/tango-page-icon.svg';

import { SidebarWrapper, SidebarMenu, EducationBadge } from './styles/PageSidebarStyles';

const PageSidebar = ({ children, parentChildren, currentPage, parent }) => {
    const getParentContent = () => 
        // Page with no children, show default text
        children.edges.length === 0 ? (
            <>
                <li className="sidebar-menu-header">
                    <img src={tangoMail} alt="tango-mail" /><span>Mailing List</span>
                </li>
                <p>
                    Do you want to get updated when we publish new trend posts?<br />
                    Just email us with your name, company name, and mailing address{' '}
                    <a href="mailto:anders@tangobrandalliance.se"> Anders Linden</a>
                </p>
            </>
        ) : (
            <>
                <li className="sidebar-menu-header">
                    <img src={tangoPage} alt="tango-page" />{' '}
                    <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                </li>
                {children.edges.map(child => (
                    <li key={child.node.id}>
                        <Link to={child.node.link}>
                            <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
                        </Link>
                    </li>
                ))}
            </>
        )

    const getChildContent = () => (
        <>
            <li className="sidebar-menu-header">
                <img src={tangoPage} alt="tango-page" />{' '}
                <span dangerouslySetInnerHTML={{ __html: parent.title }} />
            </li>
            {parentChildren.edges.map(child => (
                <li
                    key={child.node.id}
                    className={
                        currentPage.id === child.node.id ? 'sidebar-highlighted' : ''
                    }
                >
                    {currentPage.id === child.node.id ? (
                        <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
                    ) : (
                        <Link to={child.node.link}>
                            <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
                        </Link>
                    )}

                </li>
            ))}
        </>
    )
    
    return (
        <SidebarWrapper className="col-lg-3">
            {currentPage.acf.education ? (
                <EducationBadge>
                    <a href="mailto:anders@tangobrandalliance.se">
                        Enroll in the course
                    </a>
                </EducationBadge>
            ): null}
            <SidebarMenu>
                {currentPage.wordpress_parent === 0 ? getParentContent() : getChildContent()}
            </SidebarMenu>
        </SidebarWrapper>
    )
};

PageSidebar.propTypes = {
    children:  PropTypes.object,
    parentChildren:  PropTypes.object,
    currentPage:  PropTypes.object,
    parent:  PropTypes.object
}

export default PageSidebar;