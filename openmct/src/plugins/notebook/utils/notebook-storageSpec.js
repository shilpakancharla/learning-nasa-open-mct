/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2020, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

import * as NotebookStorage from './notebook-storage';
import { createOpenMct, resetApplicationState } from 'utils/testing';

const notebookStorage = {
    domainObject: {
        name: 'notebook',
        identifier: {
            namespace: '',
            key: 'test-notebook'
        }
    },
    notebookMeta: {
        name: 'notebook',
        identifier: {
            namespace: '',
            key: 'test-notebook'
        }
    },
    section: {
        id: 'temp-section',
        isDefault: false,
        isSelected: true,
        name: 'section',
        pages: [],
        sectionTitle: 'Section'
    },
    page: {
        id: 'temp-page',
        isDefault: false,
        isSelected: true,
        name: 'page',
        pageTitle: 'Page'
    }
};

let openmct = createOpenMct();

describe('Notebook Storage:', () => {
    beforeEach((done) => {
        openmct = createOpenMct();
        window.localStorage.setItem('notebook-storage', null);

        done();
    });

    afterEach(() => {
        resetApplicationState(openmct);
    });

    it('has empty local Storage', () => {
        expect(window.localStorage).not.toBeNull();
    });

    it('has null notebookstorage on clearDefaultNotebook', () => {
        window.localStorage.setItem('notebook-storage', notebookStorage);
        NotebookStorage.clearDefaultNotebook();
        const defaultNotebook = NotebookStorage.getDefaultNotebook();

        expect(defaultNotebook).toBeNull();
    });

    it('has correct notebookstorage on setDefaultNotebook', () => {
        NotebookStorage.setDefaultNotebook(openmct, notebookStorage);
        const defaultNotebook = NotebookStorage.getDefaultNotebook();

        expect(JSON.stringify(defaultNotebook)).toBe(JSON.stringify(notebookStorage));
    });

    it('has correct section on setDefaultNotebookSection', () => {
        const section = {
            id: 'new-temp-section',
            isDefault: true,
            isSelected: true,
            name: 'new section',
            pages: [],
            sectionTitle: 'Section'
        };

        NotebookStorage.setDefaultNotebook(openmct, notebookStorage);
        NotebookStorage.setDefaultNotebookSection(section);

        const defaultNotebook = NotebookStorage.getDefaultNotebook();
        const newSection = defaultNotebook.section;
        expect(JSON.stringify(section)).toBe(JSON.stringify(newSection));
    });

    it('has correct page on setDefaultNotebookPage', () => {
        const page = {
            id: 'new-temp-page',
            isDefault: true,
            isSelected: true,
            name: 'new page',
            pageTitle: 'Page'
        };

        NotebookStorage.setDefaultNotebook(openmct, notebookStorage);
        NotebookStorage.setDefaultNotebookPage(page);

        const defaultNotebook = NotebookStorage.getDefaultNotebook();
        const newPage = defaultNotebook.page;
        expect(JSON.stringify(page)).toBe(JSON.stringify(newPage));
    });
});
