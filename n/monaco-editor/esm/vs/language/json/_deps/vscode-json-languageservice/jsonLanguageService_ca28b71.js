define("d0040fa",function(e,n){"use strict";function t(e){var n=e.promiseConstructor||Promise,t=new u.JSONSchemaService(e.schemaRequestService,e.workspaceContext,n);t.setSchemaContributions(f.schemaContributions);var o=new r.JSONCompletion(t,e.contributions,n,e.clientCapabilities),g=new a.JSONHover(t,e.contributions,n),b=new s.JSONDocumentSymbols(t),p=new c.JSONValidation(t,n);return{configure:function(e){t.clearExternalSchemas(),e.schemas&&e.schemas.forEach(function(e){t.registerExternalSchema(e.uri,e.fileMatch,e.schema)}),p.configure(e)},resetSchema:function(e){return t.onResourceChange(e)},doValidation:p.doValidation.bind(p),parseJSONDocument:function(e){return m.parse(e,{collectComments:!0})},newJSONDocument:function(e,n){return m.newJSONDocument(e,n)},doResolve:o.doResolve.bind(o),doComplete:o.doComplete.bind(o),findDocumentSymbols:b.findDocumentSymbols.bind(b),findDocumentSymbols2:b.findDocumentSymbols2.bind(b),findColorSymbols:function(e,n){return b.findDocumentColors(e,n).then(function(e){return e.map(function(e){return e.range})})},findDocumentColors:b.findDocumentColors.bind(b),getColorPresentations:b.getColorPresentations.bind(b),doHover:g.doHover.bind(g),getFoldingRanges:d.getFoldingRanges,getSelectionRanges:l.getSelectionRanges,format:function(e,n,t){var o=void 0;if(n){var r=e.offsetAt(n.start),a=e.offsetAt(n.end)-r;o={offset:r,length:a}}var c={tabSize:t?t.tabSize:4,insertSpaces:t?t.insertSpaces:!0,eol:"\n"};return S.format(e.getText(),o,c).map(function(n){return i.TextEdit.replace(i.Range.create(e.positionAt(n.offset),e.positionAt(n.offset+n.length)),n.content)})}}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("849c8c1"),i=e("4872c6c");n.TextDocument=i.TextDocument,n.Position=i.Position,n.CompletionItem=i.CompletionItem,n.CompletionList=i.CompletionList,n.Hover=i.Hover,n.Range=i.Range,n.SymbolInformation=i.SymbolInformation,n.Diagnostic=i.Diagnostic,n.TextEdit=i.TextEdit,n.FormattingOptions=i.FormattingOptions,n.MarkedString=i.MarkedString;var r=e("2b1fcae"),a=e("fa9f56b"),c=e("5067f53"),s=e("1a9046e"),m=e("c4fc87e"),f=e("6389b58"),u=e("829557b"),d=e("db2041a"),l=e("b8264ed"),S=e("c2fdf10");o.__exportStar(e("3607d51"),n),n.getLanguageService=t});