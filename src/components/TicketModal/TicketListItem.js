import React from "react";
import classNames from "classnames";
import styles from "./TicketModal.module.less";
import PropTypes from "prop-types";

const TicketListItem = ({ label, fullWidth, Component }) => {
    return (
        <div
            className={
                styles[
                    classNames({
                        ListItemFulWidth: fullWidth,
                        ListItem: !fullWidth,
                    })
                ]
            }
        >
            <div
                className={
                    styles[
                        classNames({
                            labelFullWidth: fullWidth,
                            label: !fullWidth,
                        })
                    ]
                }
            >
                <b>{label}</b>
            </div>
            {Component}
        </div>
    );
};

TicketListItem.propTypes = {
    label: PropTypes.string,
    Component: PropTypes.Component,
    fullWidth: PropTypes.bool,
};

export default TicketListItem;