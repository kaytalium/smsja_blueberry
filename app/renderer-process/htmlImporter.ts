//
export module htmlImporter {


  const links = document.querySelectorAll('link[rel="import"]')
    
  export function fileLoader(category: string) {
    // Import and add each page to the DOM
    
    if (!isCategory(category)) {
      
      Array.prototype.forEach.call(links, function (link) {
        //console.log('link in impoter: ',link)
        let template = link.import.querySelector('.template-' + category)
        if (template !== null) {
          //console.log(template)
          let clone = document.importNode(template.content, true)
          let current = document.querySelector('.content').childNodes;

          if (link.href.match('home.html')) {
            //document.querySelector('body').appendChild(clone)
          } else {
            document.querySelector('.content').appendChild(clone)
            //replaceChild(current, clone)
            //  
          }
        }
      })
    }

  }

  function isCategory(catgory: string) {
    //get the all sections for the selected category
    let activeSections = document.querySelectorAll('.bb-section.category-' + catgory)

    if (activeSections.length > 0) {
      //if the view we want is available then return true to prevent duplicate import
      return true;
    } else {
      //get the current list of all the sections 
      let currentSection = document.querySelectorAll('.bb-section')

      //loop over sections and remove is section does not belong to the calling category
      Array.prototype.forEach.call(currentSection, function (section: HTMLElement) {
        if (section.dataset.template !== catgory) {
          section.parentNode.removeChild(section)
        }
      })
      //return false to the caller so that they can import the selected section(s) to match category
      return false;
    }
  }



}




