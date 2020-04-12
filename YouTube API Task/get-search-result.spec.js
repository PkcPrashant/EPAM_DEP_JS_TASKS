describe("Get Search result", function() {
    it("should receive search result", function() {
      expect(getSearchResults).toBeDefined();
    });

    it("should receive search results of next page", function() {
        expect(getSearchResultsNextPage).toBeDefined();
      });

      it("should receive search results of previous page", function() {
        expect(getSearchResultsPreviousPage).toBeDefined();
      });

});