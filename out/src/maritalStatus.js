"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   maritalStatus.ts                                   :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2023/10/18 15:42:15 by mstegema      #+#    #+#                 */
/*   Updated: 2023/10/18 15:42:17 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactMaritalStatus = void 0;
function redactMaritalStatus(cv) {
    var maritalStatus = /(\bmarital status\b|\bmarital\b|\bmarriage\b)[^,.:;]*[:.,;]?[^,.:;]*/gi;
    cv = cv.replace(maritalStatus, 'Marital status: redacted');
    return (cv);
}
exports.redactMaritalStatus = redactMaritalStatus;
